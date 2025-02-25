import { restaurantData } from "../../src/data/restaurantData";
import { sortingBy } from "../../src/utils/sorting";

describe("필터 & 정렬 테스트", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  describe("렌더링 테스트", () => {
    it("카테고리 필터가 올바르게 렌더 된다.", () => {
      cy.get("#category-filter").should("exist").and("have.value", "전체");

      const categories = [
        "전체",
        "한식",
        "중식",
        "일식",
        "양식",
        "아시안",
        "기타",
      ];

      categories.forEach((category) => {
        cy.get("#category-filter")
          .find("option")
          .contains(category)
          .should("exist");
      });
    });

    it("정렬 필터가 올바르게 렌더 된다.", () => {
      cy.get("#sorting-filter").should("exist").and("have.value", "name");

      const sortingOptions = ["이름순", "거리순"];
      sortingOptions.forEach((option) =>
        cy
          .get("#sorting-filter")
          .find("option")
          .contains(option)
          .should("exist"),
      );
    });
  });

  describe("동작 테스트", () => {
    it("카테고리 필터가 잘 동작하는지 확인한다.", () => {
      cy.get("#category-filter").select("한식");

      cy.get(".restaurant-list")
        .children()
        .each((element) => {
          cy.wrap(element)
            .find(".category-icon")
            .should("have.attr", "alt", "한식");
        });
    });

    describe("거리별 정렬 필터가 제대로 동작하는지 확인한다.", () => {
      it("거리순으로 오름차순 정렬하면 첫번째 요소가 가장 가깝다.", () => {
        const sortedRestaurantData = sortingBy("distance", restaurantData);

        cy.get("#sorting-filter").select("거리순");

        cy.get(".restaurant-list")
          .children()
          .first()
          .find(".restaurant__distance")
          .invoke("text")
          .then((distanceText) => {
            const expectedDistance = sortedRestaurantData[0].distance;
            const formattedDistanceText = `캠퍼스부터 ${expectedDistance}분 내`;

            expect(distanceText.trim()).to.equal(formattedDistanceText);
          });
      });

      it("거리순으로 오름차순 정렬하면 마지막 요소가 가장 멀다.", () => {
        const sortedRestaurantData = sortingBy("distance", restaurantData);

        cy.get("#sorting-filter").select("거리순");

        cy.get(".restaurant-list")
          .children()
          .last()
          .find(".restaurant__distance")
          .invoke("text")
          .then((distanceText) => {
            const expectedDistance =
              sortedRestaurantData[sortedRestaurantData.length - 1].distance;
            const formattedDistanceText = `캠퍼스부터 ${expectedDistance}분 내`;

            expect(distanceText.trim()).to.equal(formattedDistanceText);
          });
      });
    });
  });
  describe("이름별 정렬 필터가 제대로 동작하는지 확인한다.", () => {
    it("이름순으로 정렬하면 첫번째 요소 알파벳 순서가 가장 앞에 있다.", () => {
      const sortedRestaurantData = sortingBy("name", restaurantData);

      cy.get("#sorting-filter").select("이름순");

      cy.get(".restaurant-list")
        .children()
        .first()
        .find(".restaurant__name")
        .invoke("text")
        .then((nameText) => {
          const expectedName = sortedRestaurantData[0].name;

          expect(nameText.trim()).to.equal(expectedName);
        });
    });

    it("이름순으로 정렬하면 마지막 요소 알파벳 순서가 가장 뒤에 있다.", () => {
      const sortedRestaurantData = sortingBy("name", restaurantData);

      cy.get("#sorting-filter").select("이름순");

      cy.get(".restaurant-list")
        .children()
        .last()
        .find(".restaurant__name")
        .invoke("text")
        .then((nameText) => {
          const expectedName =
            sortedRestaurantData[sortedRestaurantData.length - 1].name;

          expect(nameText.trim()).to.equal(expectedName);
        });
    });
  });
});
