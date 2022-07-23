import middyfy from "../lib/middyfy"
import { JsonResponse } from "../lib/JsonResponse";

const hello = async (event) => {
  return JsonResponse._200({ message: 'Hello worl!' });
}

export const handler = middyfy(hello);
