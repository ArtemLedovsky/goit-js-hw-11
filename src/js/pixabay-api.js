export function searchImagesProcess(value) {
  const URL = "https://pixabay.com/api/"
  const KEY = "45377125-53da1a565bd8b37af868a9bcd"
  return fetch(`${URL}?key=${KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true`).then((response) => {
    if (!response.ok) {
      throw new Error(response.status)
    } 
    return response.json();
  }).catch((error) => {
        iziToast.error({
          position: "topRight",
            message: `${error.message}`,
        });
      })
}



