const Memory = require('./Memory')

const memory = new Memory()

class Array {
    constructor() {
        this.length = 0
        this._capacity = 0
        this.ptr = memory.allocate(this.length)
    }

    push(value) {
        console.log('before resize:',this.length, this.length + 1)
        this._resize(this.length + 1)
        memory.set(this.ptr, this.length, value)
        console.log('push vals:', this.ptr, this.length, value)
        this.length++
    }

    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        console.log('pop:',this.ptr, this.length - 1, memory.memory)
        const value = memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }

    _resize(size) {
        const oldPtr = this.ptr
        this.ptr = memory.allocate(size)
        if (this.ptr === null) {
            throw new Error('Memory full')
        }
        console.log('resize:', this.ptr, oldPtr, this.length)
        memory.copy(this.ptr, oldPtr, this.length)
        memory.free(oldPtr)
    }
}


module.exports = Array