import {splitIntoWords, sum} from "./01";

test('sum should be correct', ()=>{
//    data
    const a=1;
    const b=2;
    const c=3;

//    actions
    const result1=sum(a,b)
    const result2=sum(b,c)

//    expect result
    expect(result1).toBe(3)
    expect(result2).toBe(5)
})