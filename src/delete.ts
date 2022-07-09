export const arr = [34, 345, 567, 6798, 567];

const filteredArray = arr.filter(x => x > 48);

function filter<TArr>(arr: TArr[], compareFunc: (item: TArr) => boolean){

}

filter([34, 345, 567, 6798, 567], x => x > 48);