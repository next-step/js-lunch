import RestaurantList from "../src/domain/RestaurantListModel.js";

describe("RestaurantList Class 테스트", () => {
  it("레스토랑 정보를 초기세팅 한다.", () => {
    const restaurantList = new RestaurantList();
    const restaurants = restaurantList.restaurants;

    const initialData = [
      {
        category: "한식",
        name: "피양콩할마니",
        time: 10,
        description:
          "평양 출신의 할머니가 수십 년간 운영해온 비지 전문점 피양콩 할마니. 두부를 빼지 않은 되비지를 맛볼 수 있는 곳으로, ‘피양’은 평안도 사투리로 ‘평양’을 의미한다. 딸과 함께 운영하는 이곳에선 맷돌로 직접 간 콩만을 사용하며, 일체의 조미료를 넣지 않은 건강식을 선보인다. 콩비지와 피양 만두가 이곳의 대표 메뉴지만, 할머니가 옛날 방식을 고수하며 만들어내는 비지전골 또한 이 집의 역사를 느낄 수 있는 특별한 메뉴다. 반찬은 손님들이 먹고 싶은 만큼 덜어 먹을 수 있게 준비돼 있다.",
      },
      {
        category: "중식",
        name: "친친",
        time: 5,
        description:
          "Since 2004 편리한 교통과 주차, 그리고 관록만큼 깊은 맛과 정성으로 정통 중식의 세계를 펼쳐갑니다.",
      },
      {
        category: "일식",
        name: "잇쇼우",
        time: 10,
        description:
          "잇쇼우는 정통 자가제면 사누끼 우동이 대표메뉴입니다. 기술은 정성을 이길 수 없다는 신념으로 모든 음식에 최선을 다하는 잇쇼우는 고객 한분 한분께 최선을 다하겠습니다.",
      },
      {
        category: "양식",
        name: "이태리키친",
        time: 20,
        description: "늘 변화를 추구하는 이태리키친입니다.",
      },
      {
        category: "아시안",
        name: "호아빈 삼성점",
        time: 15,
        description: "푸짐한 양에 국물이 일품인 쌀국수.",
      },
      {
        category: "기타",
        name: "도스타코스 선릉점",
        time: 5,
        description: "멕시칸 캐주얼 그릴.",
      },
    ];

    initialData.forEach((data, index) => {
      const restaurant = restaurants[index];
      expect(restaurant.category).toEqual(data.category);
      expect(restaurant.name).toEqual(data.name);
      expect(restaurant.time).toEqual(data.time);
      expect(restaurant.description).toEqual(data.description);
    });
  });

  it("레스토랑 정보 한식 정렬 한다.", () => {
    const restaurantList = new RestaurantList();
    restaurantList.filterByCategory("한식");
    const restaurants = restaurantList.restaurants;

    const initialData = [
      {
        category: "한식",
        name: "피양콩할마니",
        time: 10,
        description:
          "평양 출신의 할머니가 수십 년간 운영해온 비지 전문점 피양콩 할마니. 두부를 빼지 않은 되비지를 맛볼 수 있는 곳으로, ‘피양’은 평안도 사투리로 ‘평양’을 의미한다. 딸과 함께 운영하는 이곳에선 맷돌로 직접 간 콩만을 사용하며, 일체의 조미료를 넣지 않은 건강식을 선보인다. 콩비지와 피양 만두가 이곳의 대표 메뉴지만, 할머니가 옛날 방식을 고수하며 만들어내는 비지전골 또한 이 집의 역사를 느낄 수 있는 특별한 메뉴다. 반찬은 손님들이 먹고 싶은 만큼 덜어 먹을 수 있게 준비돼 있다.",
      },
    ];

    initialData.forEach((data, index) => {
      const restaurant = restaurants[index];
      expect(restaurant.category).toEqual(data.category);
      expect(restaurant.name).toEqual(data.name);
      expect(restaurant.time).toEqual(data.time);
      expect(restaurant.description).toEqual(data.description);
    });
  });

  it("레스토랑 정보 전체 정렬 한다.", () => {
    const restaurantList = new RestaurantList();
    const restaurants = restaurantList.restaurants;
    restaurantList.filterByCategory("전체");

    const initialData = [
      {
        category: "한식",
        name: "피양콩할마니",
        time: 10,
        description:
          "평양 출신의 할머니가 수십 년간 운영해온 비지 전문점 피양콩 할마니. 두부를 빼지 않은 되비지를 맛볼 수 있는 곳으로, ‘피양’은 평안도 사투리로 ‘평양’을 의미한다. 딸과 함께 운영하는 이곳에선 맷돌로 직접 간 콩만을 사용하며, 일체의 조미료를 넣지 않은 건강식을 선보인다. 콩비지와 피양 만두가 이곳의 대표 메뉴지만, 할머니가 옛날 방식을 고수하며 만들어내는 비지전골 또한 이 집의 역사를 느낄 수 있는 특별한 메뉴다. 반찬은 손님들이 먹고 싶은 만큼 덜어 먹을 수 있게 준비돼 있다.",
      },
      {
        category: "중식",
        name: "친친",
        time: 5,
        description:
          "Since 2004 편리한 교통과 주차, 그리고 관록만큼 깊은 맛과 정성으로 정통 중식의 세계를 펼쳐갑니다.",
      },
      {
        category: "일식",
        name: "잇쇼우",
        time: 10,
        description:
          "잇쇼우는 정통 자가제면 사누끼 우동이 대표메뉴입니다. 기술은 정성을 이길 수 없다는 신념으로 모든 음식에 최선을 다하는 잇쇼우는 고객 한분 한분께 최선을 다하겠습니다.",
      },
      {
        category: "양식",
        name: "이태리키친",
        time: 20,
        description: "늘 변화를 추구하는 이태리키친입니다.",
      },
      {
        category: "아시안",
        name: "호아빈 삼성점",
        time: 15,
        description: "푸짐한 양에 국물이 일품인 쌀국수.",
      },
      {
        category: "기타",
        name: "도스타코스 선릉점",
        time: 5,
        description: "멕시칸 캐주얼 그릴.",
      },
    ];

    initialData.forEach((data, index) => {
      const restaurant = restaurants[index];
      expect(restaurant.category).toEqual(data.category);
      expect(restaurant.name).toEqual(data.name);
      expect(restaurant.time).toEqual(data.time);
      expect(restaurant.description).toEqual(data.description);
    });
  });

  it("레스토랑 거리순 정렬 한다.", () => {
    const restaurantList = new RestaurantList();
    restaurantList.sortBy("distance");
    const restaurants = restaurantList.restaurants;

    const initialData = [
      {
        category: "중식",
        name: "친친",
        time: 5,
        description:
          "Since 2004 편리한 교통과 주차, 그리고 관록만큼 깊은 맛과 정성으로 정통 중식의 세계를 펼쳐갑니다.",
      },
      {
        category: "기타",
        name: "도스타코스 선릉점",
        time: 5,
        description: "멕시칸 캐주얼 그릴.",
      },
      {
        category: "한식",
        name: "피양콩할마니",
        time: 10,
        description:
          "평양 출신의 할머니가 수십 년간 운영해온 비지 전문점 피양콩 할마니. 두부를 빼지 않은 되비지를 맛볼 수 있는 곳으로, ‘피양’은 평안도 사투리로 ‘평양’을 의미한다. 딸과 함께 운영하는 이곳에선 맷돌로 직접 간 콩만을 사용하며, 일체의 조미료를 넣지 않은 건강식을 선보인다. 콩비지와 피양 만두가 이곳의 대표 메뉴지만, 할머니가 옛날 방식을 고수하며 만들어내는 비지전골 또한 이 집의 역사를 느낄 수 있는 특별한 메뉴다. 반찬은 손님들이 먹고 싶은 만큼 덜어 먹을 수 있게 준비돼 있다.",
      },
      {
        category: "일식",
        name: "잇쇼우",
        time: 10,
        description:
          "잇쇼우는 정통 자가제면 사누끼 우동이 대표메뉴입니다. 기술은 정성을 이길 수 없다는 신념으로 모든 음식에 최선을 다하는 잇쇼우는 고객 한분 한분께 최선을 다하겠습니다.",
      },
      {
        category: "아시안",
        name: "호아빈 삼성점",
        time: 15,
        description: "푸짐한 양에 국물이 일품인 쌀국수.",
      },
      {
        category: "양식",
        name: "이태리키친",
        time: 20,
        description: "늘 변화를 추구하는 이태리키친입니다.",
      },
    ];

    initialData.forEach((data, index) => {
      const restaurant = restaurants[index];
      expect(restaurant.category).toEqual(data.category);
      expect(restaurant.name).toEqual(data.name);
      expect(restaurant.time).toEqual(data.time);
      expect(restaurant.description).toEqual(data.description);
    });
  });

  it("레스토랑 이름순 정렬 한다.", () => {
    const restaurantList = new RestaurantList();
    restaurantList.sortBy("name");
    const restaurants = restaurantList.restaurants;

    const initialData = [
      {
        category: "기타",
        name: "도스타코스 선릉점",
        time: 5,
        description: "멕시칸 캐주얼 그릴.",
      },
      {
        category: "양식",
        name: "이태리키친",
        time: 20,
        description: "늘 변화를 추구하는 이태리키친입니다.",
      },
      {
        category: "일식",
        name: "잇쇼우",
        time: 10,
        description:
          "잇쇼우는 정통 자가제면 사누끼 우동이 대표메뉴입니다. 기술은 정성을 이길 수 없다는 신념으로 모든 음식에 최선을 다하는 잇쇼우는 고객 한분 한분께 최선을 다하겠습니다.",
      },
      {
        category: "중식",
        name: "친친",
        time: 5,
        description:
          "Since 2004 편리한 교통과 주차, 그리고 관록만큼 깊은 맛과 정성으로 정통 중식의 세계를 펼쳐갑니다.",
      },
      {
        category: "한식",
        name: "피양콩할마니",
        time: 10,
        description:
          "평양 출신의 할머니가 수십 년간 운영해온 비지 전문점 피양콩 할마니. 두부를 빼지 않은 되비지를 맛볼 수 있는 곳으로, ‘피양’은 평안도 사투리로 ‘평양’을 의미한다. 딸과 함께 운영하는 이곳에선 맷돌로 직접 간 콩만을 사용하며, 일체의 조미료를 넣지 않은 건강식을 선보인다. 콩비지와 피양 만두가 이곳의 대표 메뉴지만, 할머니가 옛날 방식을 고수하며 만들어내는 비지전골 또한 이 집의 역사를 느낄 수 있는 특별한 메뉴다. 반찬은 손님들이 먹고 싶은 만큼 덜어 먹을 수 있게 준비돼 있다.",
      },

      {
        category: "아시안",
        name: "호아빈 삼성점",
        time: 15,
        description: "푸짐한 양에 국물이 일품인 쌀국수.",
      },
    ];

    initialData.forEach((data, index) => {
      const restaurant = restaurants[index];
      expect(restaurant.category).toEqual(data.category);
      expect(restaurant.name).toEqual(data.name);
      expect(restaurant.time).toEqual(data.time);
      expect(restaurant.description).toEqual(data.description);
    });
  });
});
