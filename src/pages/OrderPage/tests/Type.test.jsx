import { render, screen } from "@testing-library/react";
// server가 export default가 아니므로 { } 이런식으로 가져옴
import { server } from "../../../mocks/server";
import Type from "../Type";
import { rest } from "msw";

test("displays product images from server", async () => {
  // 타입에 products인지 options인지 props로 넣어준다.
  render(<Type orderType="products" />);

  // 이미지 찾기
  const productImages = await screen.findAllByRole("img", {
    // $은 정규식 표현 : product라고 끝나는 것을 인식하겠다는 의미
    // i: case insensitive => propduct가 대문자/소문자이든 상관없이 인식한다.
    name: /product$/i,
  });
  expect(productImages).toHaveLength(2);

  const altText = productImages.map((element) => element.alt);
  expect(altText).toEqual(["America product", "England product"]);
});

// 옵션 상품정보 가져오기 테스트
test("fetch option information from server", async () => {
  render(<Type orderType="options" />);

  // 체크박스 가져오기
  const optionCheckboxes = await screen.findAllByRole("checkbox");

  expect(optionCheckboxes).toHaveLength(2);
});


// error 테스트
test("when fetching product datas, face an error", async () => {
  // 정보대신에 인위적으로 error를 발생시킴(테스트 해보려고)
  server.resetHandlers(
    rest.get("http://localhost:4000/products", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<Type orderType="products" />);

  const errorBanner = await screen.findByTestId("error-banner");
  expect(errorBanner).toHaveTextContent("에러가 발생했습니다.")
});