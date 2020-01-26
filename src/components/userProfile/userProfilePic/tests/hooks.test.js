import { useLQIPImage } from "../hooks";

describe("components/userProfile/userProfilePic/hooks", () => {
  it("it should return the low quality image placeholder image src immediately", () => {
    const [src] = useLQIPImage("lowQualityImageSrc", "");

    expect(src).toEqual("lowQualityImageSrc");
  });
});
