import {expect, test} from 'vitest'

function myFunction(length: number, elements: number[]): number[][] {
    const tmpResult: number[][] = [];
    if (elements == undefined || elements.length === 0) return tmpResult;
    const firstElement = elements[0];
    if (firstElement === undefined || firstElement > length) return tmpResult;
    tmpResult.push([firstElement]);
    return tmpResult

}

test('One element match exactly', () => {

    const result = myFunction(40, [40]);

    expect(result).toStrictEqual([[40]])
})

test('One element too large', () => {

    const result = myFunction(40, [50]);

    expect(result).toStrictEqual([])
})

test('None element provided', () => {

    const result = myFunction(80, []);

    expect(result).toStrictEqual([])
})



test('One element (Size: 20) which is a multiple of lenght 40', () => {

    const result = myFunction(40, [20]);

    expect(result).toStrictEqual([[20, 20]])
})


// length too small < just one element for example length 50, elements : 60, 80
// empty element, none element
// exact fit with only one element, example length 70 and just one element of 70
// two elements and one of the element has size greater than length, example 60 with one element of 30 and the second element of 70

// happy path for
// length: 40 , element 40
// length: 40 , elements: 50
// length: 40 , elements: 20
// length: 40 , elements: 20, 30
// length: 40 , elements: 10, 30

//Memo: property base testing?