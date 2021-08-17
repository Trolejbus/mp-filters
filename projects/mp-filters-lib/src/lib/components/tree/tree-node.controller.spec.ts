import { Subscription } from "rxjs";
import { take } from "rxjs/operators";
import { TreeNodeStatus } from "./tree-node-status.enum";
import { TreeNodeController } from "./tree-node.controller";

describe('MpFiltersLibService', () => {
  
    let sub112 : TreeNodeController, sub111 : TreeNodeController, sub11 : TreeNodeController, sub121 : TreeNodeController, sub12 : TreeNodeController,
        sub1 : TreeNodeController, sub212 : TreeNodeController, sub211 : TreeNodeController, sub21 : TreeNodeController, sub221 : TreeNodeController,
        sub22 : TreeNodeController, sub2 : TreeNodeController, controller : TreeNodeController;
    let allControllers: TreeNodeController[];
    let sub1Controllers: TreeNodeController[];
    let sub2Controllers: TreeNodeController[];
    let subscription: Subscription;

    beforeEach(() => {
        sub112 = new TreeNodeController("Test title 112", []);
        sub111 = new TreeNodeController("Test title 111", []);
        sub11 = new TreeNodeController("Test title 11", [sub111, sub112]);
        sub121 = new TreeNodeController("Test title 121", []);
        sub12 = new TreeNodeController("Test title 12", [sub121]);
        sub1 = new TreeNodeController("Test title 1", [sub11, sub12]);
        sub212 = new TreeNodeController("Test title 212", []);
        sub211 = new TreeNodeController("Test title 211", []);
        sub21 = new TreeNodeController("Test title 21", [sub211, sub212]);
        sub221 = new TreeNodeController("Test title 221", []);
        sub22 = new TreeNodeController("Test title 21", [sub221]);
        sub2 = new TreeNodeController("Test title 2", [sub21, sub22]);
        controller = new TreeNodeController("Test title", [sub1, sub2]);
        allControllers = [sub112, sub111, sub11, sub121, sub12, sub1, sub212, sub211, sub21, sub221, sub22, sub2, controller];
        sub1Controllers = [sub112, sub111, sub11, sub121, sub12, sub1];
        sub2Controllers = [sub212, sub211, sub21, sub221, sub22, sub2];
        subscription = new Subscription();
        subscription.add(controller.state$.subscribe(c => {}));
    });

    afterEach(() => {
        allControllers.forEach(c => c.destroy());
        subscription?.unsubscribe();
    })

    it('Checking by default all nodes should be not selected', () => {
        // assert
        expect(allControllers.map(c => c.state$.value).every(s => s === TreeNodeStatus.NotSelected)).toEqual(true);
    });

    it('Checking isLeaf', () => {
        // assert
        expect([controller, sub1, sub11, sub12, sub2, sub21, sub22].every(s => !s.isLeaf)).toEqual(true);
        expect([sub111, sub112, sub121, sub211, sub212, sub221].every(s => s.isLeaf)).toEqual(true);
    });
  
    it('Checking root should set all to selected', () => {
        // act
        controller.select(true);

        // assert
        expect(allControllers.map(c => c.state$.value).every(v => v === TreeNodeStatus.Selected)).toEqual(true);
    });

    it('Checking node should set all childs to selected', () => {
        // arrange
        sub1.select(true);
        
        // assert
        expect(sub1Controllers.map(c => c.state$.value).every(v => v === TreeNodeStatus.Selected)).toEqual(true);
        expect(sub2Controllers.map(c => c.state$.value).every(v => v === TreeNodeStatus.NotSelected)).toEqual(true);
        expect(controller.state$.value).toEqual(TreeNodeStatus.PartialySelected);
    });
    
    it('Unchecking root should set all to unselected', () => {
        controller.select(true);
        expect(allControllers.map(c => c.state$.value).every(v => v === TreeNodeStatus.Selected)).toEqual(true);

        // arrange
        controller.select(false);
        
        // assert
        expect(allControllers.map(c => c.state$.value).every(v => v === TreeNodeStatus.NotSelected)).toEqual(true);
    });

    it('Unchecking node should set all childs to unselected', () => {
        controller.select(true);
        expect(allControllers.map(c => c.state$.value).every(v => v === TreeNodeStatus.Selected)).toEqual(true);

        // arrange
        sub1.select(false);
        
        // assert
        expect(sub1Controllers.map(c => c.state$.value).every(v => v === TreeNodeStatus.NotSelected)).toEqual(true);
        expect(sub2Controllers.map(c => c.state$.value).every(v => v === TreeNodeStatus.Selected)).toEqual(true);
        expect(controller.state$.value).toEqual(TreeNodeStatus.PartialySelected);
    });

    it('Checking leaf should set all parents to partial selected', () => {
        // arrange
        const parents = [sub11, sub1, controller];
        const notParents = allControllers.filter(c => !parents.includes(c) && c != sub111);

        // act
        sub111.select(true);

        // assert
        expect(sub111.state$.value).toEqual(TreeNodeStatus.Selected);
        expect(parents.map(c => c.state$.value).every(v => v === TreeNodeStatus.PartialySelected)).toEqual(true);
        expect(notParents.map(c => c.state$.value).every(v => v === TreeNodeStatus.NotSelected)).toEqual(true);
    });

    it('Checking all nodes should set node to selected', () => {
        // arrange
        sub1.select(true);
        expect(controller.state$.value).toEqual(TreeNodeStatus.PartialySelected);

        // act
        sub2.select(true);

        // assert
        expect(controller.state$.value).toEqual(TreeNodeStatus.Selected);
    });


});
  