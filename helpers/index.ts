export const generateImageUrl = async (image: string) => {
    const UPLOAD_PRESET = "amatech_lasu";
    const CLOUD_NAME = "dasjswerc";
    if (!image) return;
  
    const formData = new FormData();
  
    formData.append("file", image);
    formData.append("upload_preset", UPLOAD_PRESET!);
  
    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME!}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
  
      // console.log(res.json());
      const data = await res.json();
      const imageURL = data["secure_url"];
      return imageURL;
    } catch (err) {
      console.log(err);
    }
  };