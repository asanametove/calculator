export class Graph {
    static buildGraph(string) {
        let res = new Node(null);
        return this.split(string, res);
    }

    static split(string, head) {
        this.operators = [
            new Operator('+', 1),
            new Operator('-', 1),
            new Operator('*', 2),
            new Operator('/', 2),
        ];

        let splitIndex = Number.MIN_VALUE,
            priority = Number.MAX_VALUE,
            left = null,
            right = null;

        this.operators.map((operator) => {
            let tempIndex = string.lastIndexOf(operator.sign);

            if (tempIndex === -1)
                return;

            if (tempIndex > splitIndex && operator.priority <= priority) {
                splitIndex = tempIndex;
                priority = operator.priority;
                head.value = operator.sign;
            }
        });


        if (splitIndex !== Number.MIN_VALUE) {
            left = string.slice(0, splitIndex);
            right = string.slice(splitIndex + 1, string.length);
            head.left = this.split(left, new Node(null));
            head.right = this.split(right, new Node(null));
            return head;
        } else {
            head.value = string;
            return head;
        }
    }

    static calcChilds(node) {
        let left = +node.left.value;
        let right = +node.right.value;
        let res;

        switch (node.value) {
            case '+':
                res = left + right;
                break;
            case '-':
                res = left - right;
                break;
            case '*':
                res = left * right;
                break;
            case '/':
                res = left / right;
                break;
            default:
                throw new Error('Unknown operation');
        }

        return res;
    }

    static resolveGraph(head) {
        if (head) {
            this.resolveGraph(head.left);
            this.resolveGraph(head.right);

            if (!Number.isFinite(+head.value)) {
                head.value = this.calcChilds(head);
            }
            return head.value;
        }
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class Operator {
    constructor(sign, priority) {
        this.sign = sign;
        this.priority = priority;
    }
}

export class Calculator {
    static calculate(expression) {
        let graph = Graph.buildGraph(expression);
        return Graph.resolveGraph(graph);
    }
}

// export default Graph;
export default Calculator;