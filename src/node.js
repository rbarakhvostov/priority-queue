class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		 
		if (! this.left) this.left = node;
		else if (this.left && this.right) {
			this.left = this.left;
			this.right = this.right;
		}
		else this.right = node;
	}

	removeChild(node) {
		if (this.left === node) this.left = null;
		else if (this.right === node) this.right = null;
		else throw new Error();
	}

	remove() {
		
	}

	swapWithParent() {
		
	}
}

module.exports = Node;
