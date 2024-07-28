import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class HuggingFaceService {
  private readonly apiKey = process.env.HUGGINGFACE_API_KEY;

  constructor() {}

  async generateText(prompt: string) {
    const headers = {
      Authorization: `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json',
    };

    const data = {
      inputs: prompt,
    };

    try {
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/gpt2',
        data,
        { headers }
      );
      return response.data[0].generated_text;
    } catch (error) {
      console.error('Error calling Hugging Face API:', error);
      throw error;
    }
  }
}
