describe("Header 테스트", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("Header 떴는지 확인", () => {
    cy.get(".gnb").should("exist");
    cy.get(".gnb__title.text-title").should("contain", "점심 뭐 먹지");
  });
});

describe("음식점 리스트 테스트", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("피양콩 할머니 렌더링 확인", () => {
    cy.get(".restaurant").should("exist");
    cy.get(".restaurant__name.text-subtitle").should("contain", "피양콩할마니");
  });

  it("한식 선택 시 필터링 확인", () => {
    cy.get("#category-filter").select("한식");
    cy.get(".restaurant__name.text-subtitle").should("contain", "피양콩할마니");
  });

  it("일식 선택 시 필터링 확인", () => {
    cy.get("#category-filter").select("일식");
    cy.get(".restaurant__name.text-subtitle").should("contain", "잇쇼우");
  });

  it("중식 선택 시 필터링 확인", () => {
    cy.get("#category-filter").select("중식");
    cy.get(".restaurant__name.text-subtitle").should("contain", "친친");
  });

  it("양식 선택 시 필터링 확인", () => {
    cy.get("#category-filter").select("양식");
    cy.get(".restaurant__name.text-subtitle").should("contain", "이태리키친");
  });

  it("기타 선택 시 필터링 확인", () => {
    cy.get("#category-filter").select("기타");
    cy.get(".restaurant__name.text-subtitle").should(
      "contain",
      "도스타코스 선릉점"
    );
  });

  it("거리순 선택 시 필터링 확인", () => {
    cy.get("#category-filter").select("전체");
    cy.get("#sorting-filter").select("거리순");

    cy.get(".restaurant")
      .eq(0)
      .find(".restaurant__name.text-subtitle")
      .should("contain", "친친");
    cy.get(".restaurant")
      .eq(1)
      .find(".restaurant__name.text-subtitle")
      .should("contain", "도스타코스 선릉점");
    cy.get(".restaurant")
      .eq(2)
      .find(".restaurant__name.text-subtitle")
      .should("contain", "피양콩할마니");
    cy.get(".restaurant")
      .eq(3)
      .find(".restaurant__name.text-subtitle")
      .should("contain", "잇쇼우");
    cy.get(".restaurant")
      .eq(4)
      .find(".restaurant__name.text-subtitle")
      .should("contain", "호아빈 삼성점");
    cy.get(".restaurant")
      .eq(5)
      .find(".restaurant__name.text-subtitle")
      .should("contain", "이태리키친");
  });

  it("이름순 선택 시 필터링 확인", () => {
    cy.get("#category-filter").select("전체");
    cy.get("#sorting-filter").select("거리순"); //change가 일어나야 하기 때문에 바꿔줌
    cy.get("#sorting-filter").select("이름순");

    cy.get(".restaurant")
      .eq(0)
      .find(".restaurant__name.text-subtitle")
      .should("contain", "도스타코스 선릉점");
    cy.get(".restaurant")
      .eq(1)
      .find(".restaurant__name.text-subtitle")
      .should("contain", "이태리키친");
    cy.get(".restaurant")
      .eq(2)
      .find(".restaurant__name.text-subtitle")
      .should("contain", "잇쇼우");
    cy.get(".restaurant")
      .eq(3)
      .find(".restaurant__name.text-subtitle")
      .should("contain", "친친");
    cy.get(".restaurant")
      .eq(4)
      .find(".restaurant__name.text-subtitle")
      .should("contain", "피양콩할마니");
    cy.get(".restaurant")
      .eq(5)
      .find(".restaurant__name.text-subtitle")
      .should("contain", "호아빈 삼성점");
  });

  it("자주가는 식당 별 이미지 클릭 테스트", () => {
    cy.get(".favorite-icon").eq(0).click();
    cy.get(".favorite-icon")
      .eq(0)
      .invoke("attr", "src")
      .should("contain", "favorite-icon-filled.png");
  });

  it("자주가는 식당 클릭 테스트", () => {
    cy.get(".favorite-icon").eq(0).click();
    cy.get(".favorite-icon").eq(1).click();
    cy.get(".favorite-restaurant").click();

    cy.get(".restaurant")
      .eq(0)
      .find(".restaurant__name.text-subtitle")
      .should("contain", "피양콩할마니");
    cy.get(".restaurant")
      .eq(1)
      .find(".restaurant__name.text-subtitle")
      .should("contain", "친친");
  });
});

describe("카테고리 리스트 테스트", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });
  it("카테고리 리스트 확인", () => {
    cy.get("#category-filter")
      .find("option")
      .eq(0)
      .should("have.value", "전체");
    cy.get("#category-filter")
      .find("option")
      .eq(1)
      .should("have.value", "한식");
    cy.get("#category-filter")
      .find("option")
      .eq(2)
      .should("have.value", "중식");
    cy.get("#category-filter")
      .find("option")
      .eq(3)
      .should("have.value", "일식");
    cy.get("#category-filter")
      .find("option")
      .eq(4)
      .should("have.value", "양식");
    cy.get("#category-filter")
      .find("option")
      .eq(5)
      .should("have.value", "아시안");
    cy.get("#category-filter")
      .find("option")
      .eq(6)
      .should("have.value", "기타");
  });
});

describe("모달창 테스트", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });
  it("모달 창 오픈 확인", () => {
    cy.get("#gnb__button").click();
    cy.get(".modal").should("have.class", "modal--open");
  });
  it("모달 창 닫기 확인", () => {
    cy.get("#gnb__button").click();
    cy.get("#cancelButton").click();
    cy.get(".modal").should("not.have.class", "modal--open");
  });
  it("카테고리 입력X시 모달창 닫히지 않는지 확인", () => {
    cy.get("#gnb__button").click();
    cy.get(".modal").should("have.class", "modal--open");

    cy.get("#name").type("맛있는 음식점");
    cy.get("#time").select("10");

    cy.get("#submit").click();

    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("카테고리를 입력하십시오");
    });
  });
});

describe("음식점 상세 모달창 테스트", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });
  it("모달 창 오픈 확인", () => {
    cy.get("li.restaurant").first().click();
    cy.get(".detail").should("have.class", "modal--open");
  });
  it("모달 창 닫기 확인", () => {
    cy.get("li.restaurant").first().click();
    cy.get("#cancel__button__detail").click();
    cy.get(".detail").should("not.have.class", "modal--open");
  });
  it("1번 음식점 클릭 후 삭제됐는지 확인", () => {
    cy.get("li.restaurant").first().click();
    cy.get("#remove__button_detail").click();

    cy.get(".restaurant")
      .eq(0)
      .find(".restaurant__name.text-subtitle")
      .should("not.contain", "피양콩할마니");

    cy.get(".restaurant")
      .eq(0)
      .find(".restaurant__name.text-subtitle")
      .should("contain", "친친");
  });
});
