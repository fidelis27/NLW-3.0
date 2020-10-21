import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import bcrypt from 'bcryptjs';
import User from '../models/User';

export default {
  async create(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const userRepository = getRepository(User);

    const data = {
      name,
      email,
      password,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required().email(),
      password: Yup.string().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const userExists = await userRepository.findOne({ where: { email } });

    if (userExists) {
      return response.status(400).json({ erro: 'User already exists' });
    }

    const password_hash = await bcrypt.hash(password, 8);
    const user = userRepository.create({
      name,
      email,
      password: password_hash,
    });

    await userRepository.save(user);

    return response.status(201).json(user);
  },
};
