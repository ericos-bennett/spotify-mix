import SpotifyWebApi from 'spotify-web-api-node';
import dotenv from 'dotenv';
dotenv.config();

const getAuthorizeUrl = () => {

  const scopes : string[] = ['user-read-private', 'user-read-email'];
  const state : string = 'some-state-of-my-choice';
  
  const clientId : string = process.env.CLIENT_ID!;
  const clientSecret :string = process.env.CLIENT_SECRET!;
  const redirectUri : string = 'https://example.com/callback';
  
  const spotifyApi = new SpotifyWebApi({
    clientId,
    clientSecret,
    redirectUri
  });
  
  // Create the authorization URL
  const authorizeURL : string = spotifyApi.createAuthorizeURL(scopes, state);
  return authorizeURL;

};

export { getAuthorizeUrl };