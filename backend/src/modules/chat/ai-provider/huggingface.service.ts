import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class HuggingFaceService {
  private readonly apiKey = process.env.HUGGINGFACE_API_KEY;

  constructor() {}

  async generateText(prompt: string): Promise<string> {
    const headers = {
      Authorization: `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json',
    };

    const data = {
      inputs: prompt,
      parameters: {
        temperature: 0.9,
        repetition_penalty: 5,
        max_time: 10,
        max_length: 100,
        min_length: 10,
      }
    };

    try {
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/mistralai/Mistral-Nemo-Instruct-2407',
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
