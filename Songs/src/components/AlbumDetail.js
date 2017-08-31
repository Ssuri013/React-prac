import React from 'react';
import { Text, Image, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
return (
  <Card>
  <CardSection>
  <View>
  <Image style={styles.imageStyle} source={{ uri: props.album.thumbnail_image }} />
  </View>
  <View style={styles.headerContentStyle}>
    <Text key={props.album.title} style={styles.headerTextStyle}> {props.album.title} </Text>
    <Text key={props.album.artist}>{props.album.artist}</Text>
    </View>
  </CardSection>

  <CardSection>
  <Image style={styles.image} source={{ uri: props.album.image }} />
  </CardSection>

  <CardSection>
  <Button />
  </CardSection>
  </Card>
);
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 50,
    width: 50,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center'
  },
  image: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
