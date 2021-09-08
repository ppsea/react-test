import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./index";

describe("<Counter />", () => {
  it("matches snapshot", () => {
    const utils = render(<Counter />);
    expect(utils.container).toMatchSnapshot();
  });
  //현재 카운트랑 버튼이 있나?
  it("has a number and two button", () => {
    const utils = render(<Counter />);
    utils.getByText("0"); //h2
    utils.getByText("+1"); //button1
    utils.getByText("-1"); //button2
  });
  //증가 버튼 테스트
  it("increase", () => {
    const utils = render(<Counter />);
    const number = utils.getByText("0");
    const plusButton = utils.getByText("+1");
    //클릭 이벤트 2번 발생
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    expect(number).toHaveTextContent("2");
    expect(number.textContent).toBe("2");
  });
  it("decrease", () => {
    const utils = render(<Counter />);
    const number = utils.getByText("0");
    const minusButton = utils.getByText("-1");
    // 클릭 이벤트를 두번 발생시키기
    fireEvent.click(minusButton);
    fireEvent.click(minusButton);
    expect(number).toHaveTextContent("-2");
  });
});
