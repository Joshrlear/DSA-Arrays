class Memory {
    constructor() {
        this.memory = new Float64Array(1024);
        this.head = 0;
    }
    
    // reserve space in memory
    allocate(size) {
        if (this.head + size > this.memory.length) {
          return null;
        }
        console.log('allocate:', this.head)
        let start = this.head;

        this.head += size;
        console.log('allocate2:', this.head += size, start)
        return start;
    }
  
    // free space in memory
    free(ptr) {}
  
    copy(toIdx, fromIdx, size) {
        if (fromIdx === toIdx) {
            console.log('copy:', toIdx, fromIdx, size)
            return;
        }
  
        if (fromIdx > toIdx) {

            // Iterate forwards
            for (let i = 0; i < size; i++) {
                this.set(toIdx + i, this.get(fromIdx + i));
                console.log('copy1:', toIdx, fromIdx)
            }
        }  
        else {
            // Iterate backwards
            for (let i = size - 1; i >= 0; i--) {
                this.set(toIdx + i, this.get(fromIdx + i));
                console.log('copy2:', toIdx, this.get(fromIdx + i))
                console.log('copy3:', toIdx + i, this.get(fromIdx + i))
            }
        }
    }
  
    get(ptr) {
        return this.memory[ptr];
    }
  
    set(ptr, value) {
        console.log('this is the ptr:',ptr, 'this is the value:',value)
        this.memory[ptr] = value;
    }
  }

  module.exports = Memory;