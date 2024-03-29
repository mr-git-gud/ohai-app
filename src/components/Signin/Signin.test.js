import React from "react";
import { shallow } from "enzyme";
import Signin from "./Signin";

let wrapper;
beforeEach(() => {
  const mockProps = {
    email: "",
    setPass1: "",
    setPass2: "",
    formErrMsg: "",
    password: "",
    signInEmail: "chunkylover53@aol.com",
    signInPassword: "123",
    route: "signin",
    onEmailChange: jest.fn(),
    onSetPass1: jest.fn(),
    onSetPass2: jest.fn(),
    setFormErrMsg: jest.fn(),
    setPassword: jest.fn(),
    onSignInEmailChange: jest.fn(),
    onSignInPasswordChange: jest.fn(),
    changeRoute: jest.fn()
  };
  wrapper = shallow(<Signin {...mockProps} />);
});

it("renders without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it("navigates to register", () => {
  expect(wrapper.instance().navigateToRegister());
});

it("signs in a user", done => {
  expect(wrapper.instance().onSignIn());
  done();
});
