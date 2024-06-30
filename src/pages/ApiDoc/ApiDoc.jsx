import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";

const ApiDoc = () => {
  return (
    <Card className="max-w-4xl mx-auto mt-8 p-4">
      <h3 className="text-lg  mt-4 italic">
        ♥️Thanks to Max from{" "}
        <a href="https://replexica.com/en" target="_blank" rel="noreferrer">
          Replexica
        </a>{" "}
        for motivating us to create this API!♥️
      </h3>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          API Documentation
        </CardTitle>
        <CardDescription>
          Endpoint: <strong>/get-air-recommendations-externally</strong>
        </CardDescription>
      </CardHeader>

      <CardContent>
        <h2 className="text-lg font-semibold mt-4">Method</h2>
        <p className="mb-4">
          <strong>POST</strong>
        </p>

        <h2 className="text-lg font-semibold mt-4">Description</h2>
        <p className="mb-4">
          This endpoint provides personalized air quality recommendations based
          on the specified city, user parameters, and current weather
          conditions. It helps users make informed decisions about outdoor
          activities and understand current air quality.
        </p>

        <h2 className="text-lg font-semibold mt-4">Request Body</h2>
        <p className="mb-4">
          The request body must be a JSON object with the following properties:
        </p>

        <Table className="mb-4">
          <TableHead>
            <TableRow>
              <TableCell className="font-semibold">Parameter</TableCell>
              <TableCell className="font-semibold">Type</TableCell>
              <TableCell className="font-semibold">Description</TableCell>
              <TableCell className="font-semibold">Required</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>city</TableCell>
              <TableCell>string</TableCell>
              <TableCell>
                The name of the city for which air quality recommendations are
                requested.
              </TableCell>
              <TableCell>Yes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>userParams</TableCell>
              <TableCell>object</TableCell>
              <TableCell>
                User-specific parameters including age, activity level, and
                asthma condition.
              </TableCell>
              <TableCell>Yes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>userParams.age</TableCell>
              <TableCell>number</TableCell>
              <TableCell>Age of the user.</TableCell>
              <TableCell>Yes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>userParams.isActive</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>Whether the user is physically active.</TableCell>
              <TableCell>Yes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>userParams.hasAsma</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>Whether the user has asthma.</TableCell>
              <TableCell>Yes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>question</TableCell>
              <TableCell>AcceptableQuestionKeys</TableCell>
              <TableCell>
                The question to be answered, determining the type of
                recommendation.
              </TableCell>
              <TableCell>Yes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>weatherAPIKey</TableCell>
              <TableCell>string</TableCell>
              <TableCell>API key for accessing weather data.</TableCell>
              <TableCell>Yes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>whatIsUserDoingAtTheMoment</TableCell>
              <TableCell>string (optional)</TableCell>
              <TableCell>
                {`A description of the user's current activity.`}
              </TableCell>
              <TableCell>No</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <h2 className="text-lg font-semibold mt-4">Acceptable Question Keys</h2>
        <Table className="mb-4">
          <TableHead>
            <TableRow>
              <TableCell className="font-semibold">Key</TableCell>
              <TableCell className="font-semibold">Explanation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>goForARun</TableCell>
              <TableCell>Should the person go for a run now?</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>whatToDoRn</TableCell>
              <TableCell>
                How to make the air status better based on what they are doing
                right now?
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>currentAirSituation</TableCell>
              <TableCell>
                What is the current air status tailored for this person?
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <h2 className="text-lg font-semibold mt-4">Response</h2>
        <p className="mb-4">
          The response is a JSON object containing the following properties:
        </p>

        <Table className="mb-4">
          <TableHead>
            <TableRow>
              <TableCell className="font-semibold">Parameter</TableCell>
              <TableCell className="font-semibold">Type</TableCell>
              <TableCell className="font-semibold">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>city</TableCell>
              <TableCell>string</TableCell>
              <TableCell>
                The name of the city from the input parameters.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>lat</TableCell>
              <TableCell>number</TableCell>
              <TableCell>The latitude of the specified city.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>long</TableCell>
              <TableCell>number</TableCell>
              <TableCell>The longitude of the specified city.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>pm2_5</TableCell>
              <TableCell>number</TableCell>
              <TableCell>
                The current PM2.5 air quality index for the specified location.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>questionOutput</TableCell>
              <TableCell>string</TableCell>
              <TableCell>
                {`The answer to the specified question, tailored to the user's
                parameters and current air quality.`}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <h2 className="text-lg font-semibold mt-4">Example Request</h2>
        <pre className="bg-gray-100 p-2 rounded mb-4">
          <code>
            {`{
  "city": "Barcelona",
  "userParams": {
    "age": 40,
    "isActive": true,
    "hasAsma": false
  },
  "question": "goForARun",
  "weatherAPIKey": "your_weather_api_key_here",
  "whatIsUserDoingAtTheMoment": "working"
}`}
          </code>
        </pre>

        <h2 className="text-lg font-semibold mt-4">Example Response</h2>
        <pre className="bg-gray-100 p-2 rounded mb-4">
          <code>
            {`{
  "city": "Barcelona",
  "lat": 41.3851,
  "long": 2.1734,
  "pm2_5": 12,
  "questionOutput": "The air quality is good. You can go for a run."
}`}
          </code>
        </pre>

        <h2 className="text-lg font-semibold mt-4">
          Why This API is Impactful
        </h2>
        <p>
          This API is crucial for users who are concerned about air quality and
          its effects on health, particularly those with conditions like asthma.
          By providing tailored recommendations, it empowers users to make
          informed decisions about their activities, thereby promoting healthier
          and more active lifestyles.
        </p>
      </CardContent>
    </Card>
  );
};

export default ApiDoc;
