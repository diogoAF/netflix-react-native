import Geolocation from '@react-native-community/geolocation';

export const GetLocation = () => {
    Geolocation.getCurrentPosition(info => console.log(info));
}
