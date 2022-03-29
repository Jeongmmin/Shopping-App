// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import { server } from "./mocks/server";

// 테스트가 시작하기전에 서버 실행
beforeAll(() => server.listen());

// 모든 각각의 테스트가 끝난 후에는 handler를 reset을 해주어야 한다.
afterEach(() => server.resetHandlers());

// 모든 테스트가 끝났을 때는 서버를 꺼주어야 한다.
afterAll(() => server.close());