import middy from "@middy/core";
import httpErrorHandler from "@middy/http-error-handler";
import httpEventNormalizer from "@middy/http-event-normalizer";
import jsonBodyParser from "@middy/http-json-body-parser";
import cors from '@middy/http-cors';

export default handler => middy(handler)
  .use([
    jsonBodyParser(),
    httpEventNormalizer(),
    httpErrorHandler(),
    cors()
  ]);
