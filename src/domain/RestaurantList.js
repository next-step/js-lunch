import Restaurant from "./Restaurant.js";

class RestaurantList {

    #restaurants;

    constructor() {
        this.#initData();
    }

    #initData() {
        const initialData = [
            {
                category: '한식',
                name: '피양콩할마니',
                time: 10,
                description: '평양 출신의 할머니가 수십 년간 운영해온 비지 전문점 피양콩 할마니. 두부를 빼지 않은 되비지를 맛볼 수 있는 곳으로, ‘피양’은 평안도 사투리로 ‘평양’을 의미한다. 딸과 함께 운영하는 이곳에선 맷돌로 직접 간 콩만을 사용하며, 일체의 조미료를 넣지 않은 건강식을 선보인다. 콩비지와 피양 만두가 이곳의 대표 메뉴지만, 할머니가 옛날 방식을 고수하며 만들어내는 비지전골 또한 이 집의 역사를 느낄 수 있는 특별한 메뉴다. 반찬은 손님들이 먹고 싶은 만큼 덜어 먹을 수 있게 준비돼 있다.'
            },
            {
                category: '중식',
                name: '친친',
                time: 5,
                description: 'Since 2004 편리한 교통과 주차, 그리고 관록만큼 깊은 맛과 정성으로 정통 중식의 세계를 펼쳐갑니다.'
            },
            {
                category: '일식',
                name: '잇쇼우',
                time: 10,
                description: '잇쇼우는 정통 자가제면 사누끼 우동이 대표메뉴입니다. 기술은 정성을 이길 수 없다는 신념으로 모든 음식에 최선을 다하는 잇쇼우는 고객 한분 한분께 최선을 다하겠습니다.'
            },
            {
                category: '양식',
                name: '이태리키친',
                time: 20,
                description: '늘 변화를 추구하는 이태리키친입니다.'
            },
            {
                category: '아시안',
                name: '호아빈 삼성점',
                time: 15,
                description: '푸짐한 양에 국물이 일품인 쌀국수.'
            },
            {
                category: '기타',
                name: '도스타코스 선릉점',
                time: 5,
                description: '멕시칸 캐주얼 그릴.'
            }
        ];

        this.#restaurants = initialData.map(data =>
            new Restaurant(data.category, data.name, data.time, data.description)
        );
    }

    get restaurants() {
        return this.#restaurants;
    }

    filterByCategory(category) {
        if(category === '전체') {
            this.#initData;
            return;
        }
        this.#restaurants = this.#restaurants.filter(restaurant => restaurant.category === category);
    }

    sortBy(value) {
        if (value === 'name') {
            this.#restaurants = [...this.#restaurants].sort((a, b) => b.name.localeCompare(a.name));
        } else if (value === 'distance') {
            this.#restaurants = [...this.#restaurants].sort((a, b) => {
                const timeA = a.time;
                const timeB = b.time;
                return timeB - timeA;
            });
        }
    }

}

export default RestaurantList;