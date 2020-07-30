
export abstract class CompositeComponent {
    protected parent: CompositeComponent;

    public setParent(parent: CompositeComponent) {
        this.parent = parent;
    }

    public getParent(): CompositeComponent {
        return this.parent;
    }

    public add(component: CompositeComponent): void { }

    public remove(component: CompositeComponent): void { }


    public isComposite(): boolean {
        return false;
    }

    public abstract operation(): string;
}


export class Leaf extends CompositeComponent {
    public operation(): string {
        return 'Leaf';
    }
}

export class Composite extends CompositeComponent {
    protected children: CompositeComponent[] = [];

    /**
     * A composite object can add or remove other components (both simple or
     * complex) to or from its child list.
     */
    public add(component: CompositeComponent): void {
        this.children.push(component);
        component.setParent(this);
    }

    public remove(component: CompositeComponent): void {
        const componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);

        component.setParent(null);
    }

    public isComposite(): boolean {
        return true;
    }

    /**
     * The Composite executes its primary logic in a particular way. It
     * traverses recursively through all its children, collecting and summing
     * their results. Since the composite's children pass these calls to their
     * children and so forth, the whole object tree is traversed as a result.
     */
    public operation(): string {
        const results = [];
        for (const child of this.children) {
            results.push(child.operation());
        }

        return `Branch(${results.join('+')})`;
    }
}