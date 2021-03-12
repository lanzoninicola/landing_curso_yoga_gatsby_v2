import { benefitsModel } from "@data"

const benefitsEntity = () => {
  // function addCategoryColor(category) {
  //   let color
  //   if (category === "mental") {
  //     color = "#058EC5"
  //   }
  //   if (category === "emotional") {
  //     color = "#DB1629"
  //   }
  //   if (category === "physical") {
  //     color = "#A4347E"
  //   }
  //   if (category === "breathing") {
  //     color = "#87A8D5"
  //   }
  //   if (category === "estresse") {
  //     color = "#F5C719"
  //   }

  //   return color
  // }

  return benefitsModel.map(item => {
    return {
      text: item.text,
      color: "#000000",
    }
  })
}

export default benefitsEntity
