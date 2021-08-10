let app = new Vue({
    el: "#app",
    data: {
        tower: [
            {
                arr: [1, 2, 3, 4, 5, 6, 7],
                status: false
            },
            {
                arr: [],
                status: false
            },
            {
                arr: [],
                status: false
            }
        ],
        anterior: false,
        moves: 0,
        size: 7
    }, methods: {
        jugar: function (element) {
            if (this.anterior) {
                if (element.arr.length == 0 || element.arr[0] > this.anterior.arr[0]) {
                    element.arr.unshift(this.anterior.arr.shift());
                    this.moves++;
                } else if (element.arr[0] !== this.anterior.arr[0]) {
                    return
                }
                this.tower.forEach(i => i.status = false);
                this.anterior = false;
                return
            }
            if (element.arr.length > 0) {
                element.status = true;
                this.anterior = element;
                this.tower.slice();
            }
        }, towersize: function () {
            this.tower = [];
            let arrs = Array(parseInt(this.size)).fill(0);
            arrs = arrs.map((x, index) => index + 1);
            this.tower.push({ "arr": arrs, status: false })
            this.tower.push({ "arr": [], status: false })
            this.tower.push({ "arr": [], status: false })
            this.moves = 0;
            this.anterior=false;
        }
    }
})