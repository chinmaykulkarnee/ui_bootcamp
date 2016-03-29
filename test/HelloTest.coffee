Hello = require '../app/src/hello'

describe "hello", () ->
  it "should return 'hello'", () ->
    hello = new Hello();
    expect( hello.message() ).toBe "Hello"

