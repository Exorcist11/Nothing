import { User } from "../models/User";
import { faker } from "@faker-js/faker";

export const fakeData = async (req, res) => {
  try {
    for (let i = 0; i < 21; i++) {
      const fakeUser = new User();
      fakeUser.email = faker.internet.email();
      fakeUser.password = faker.internet.password();
      fakeUser.active = true;
      const saveF = await fakeUser.save();
      return res.status(201).json({
        errCode: 0,
        errMsg: "Fake data success",
        data: saveF,
      });
    }
  } catch (error) {
    return res.status(500).json({ errMsg: "Error connect: " + error });
  }
};

export const getAll = async (req, res) => {
  try {
    let perPage = 10;
    let page = req.params.page || 1;

    const products = await User.find()
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec();

    const count = await User.countDocuments();

    res.send({
      products,
      total: count,
    });
  } catch (error) {
    return res.status(500).json({ errMsg: "Error connect: " + error });
  }
};

