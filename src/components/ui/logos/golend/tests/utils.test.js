import { getSrcSet } from "../utils";

describe("components/logos/golend/utils", () => {
  it("should return srcSet with the correct CDN url for the given settings ", () => {
    const imgSettings = {
      width: 200,
      additional: ["f_auto"]
    };

    const srcSet = getSrcSet(imgSettings);

    expect(srcSet).toEqual(
      "https://res.cloudinary.com/jccloudinary/image/upload/f_auto,w_200/v1580017111/golend/golendLogo_xbjpuo.png 200w"
    );
  });

  it("should return an empty srcSet if width is not specified", () => {
    const imgSettings = {
      additional: ["f_auto"]
    };

    const srcSet = getSrcSet(imgSettings);

    expect(srcSet).toEqual("");
  });
});
