class UnionFind{
    constructor(n){
        this.arr = []
        for(let i = 0; i < n; ++i){
            this.arr.push(i)
        }
        this.n=n
    }
    root(a){
        if(this.arr[a]==a){
            return a
        }
        return this.arr[a]=this.root(this.arr[a])
    }
    merge(a,b){
        this.arr[this.root(a)]=this.root(b)
    }
    same(a,b){
        return this.root(a)==this.root(b)
    }
}
class SquareUnionFind extends UnionFind{
    constructor(h,w){
        super(h*w)
        this.h=h
        this.w=w
    }
    root(a,b){
        return super.root(a*w+b)
    }
    merge(a,b,c,d){
        return super.merge(a*w+b,c*w+d)
    }
    same(a,b,c,d){
        return super.same(a*w+b,c*w+d)
    }
}
/**
 * Segment Tree Class
 */
class SegTree{
    /**
     * Segment Tree
     * @param {number} n - The tree size.
     * @param {number} e - Unit element value.
     * @param {function} op - Monoid calculate function.
     */
    constructor(n,e,op){
        this.n = n
        this.e = e
        let deg = 0
        let nc = n
        do{
            deg++
        }while(nc>>=1)
        let st = 1
        for(let i = 0; i < deg;++i){
            st<<=1
        }
        this.ns=st
        this.arr = [...Array(this.ns*2+1)].map(()=>e)
        this.op = op
    }
    set(i,v){
        let ri = i+this.ns+1
        this.arr[ri]=v
        while(true){
            ri>>=1
            this.arr[ri]=this.op(this.arr[ri*2+0],this.arr[ri*2+1])
            if(ri==1){
                break
            }
        }
    }
    get(i){
        return this.arr[i+this.ns+1]
    }
    prod(i,j){
        let idx = i
        let ri = i+this.ns+1
        let cs_size = 1
        let ans = this.e
        while(idx<j){
            //console.log(`ok: ${ans}`)
            while(ri%2==0&&idx+cs_size*2-1<j&&ri!=1){
                //console.log(`in: ${ri} ${cs_size}`)
                ri>>=1
                cs_size*=2
            }
            ans = this.op(ans,this.arr[ri])
            idx = idx+cs_size
            cs_size=1
            ri = idx+this.ns+1
        }
        return ans
    }
}
function main(){
    /**
     * Welcome to my portfolio!
     * This file represents some major algorithms and data structures.
     * They reduce "computational complexity" under certain conditions.
     */
}