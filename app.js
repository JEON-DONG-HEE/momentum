// 요일과 같이 각 요소들이 같은 성격의 데이터로 설명이 필요없을 때는 Array를 쓰는게 좋지만,
// 사람의 특성과 같이 여러가지 다른 성격의 데이터로 구성되어 있어 설명이 필요할 때는
// 객체를 만들어서 property: value 로 관리하는 것이 직관적이고 관리하기 쉽다
const player = {
    name: "JDH",
    point: 10000,
    fat: true,
};

console.log(player);
console.log(player.name);
console.log(player['point']);

player.fat = false;

console.log(player);

player.lastName = 'Tamato';

console.log(player);

player.point = player.point + 10;

console.log(player);

// const 는 상수이므로 변할 수 없다. 이렇게 객체를 변경하는 것은 에러가 나지만
// player.fat = false; 처럼 객체가 가지고 있는 프로퍼티를 변경하는 것은 허용된다.
player = false;     

