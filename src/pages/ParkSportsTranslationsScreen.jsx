import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import ParkSportsHeader from '../components/ParkSportsHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <ParkSportsHeader />
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast(
          'Premier League',
          '14.02 19:00',
          'Manchester United ' + '\nLiverpool',
        )}
        {renderBroadcast(
          'NBA',
          '22.03 20:30',
          'Los Angeles Lakers ' + '\nChicago Bulls',
        )}
        {renderBroadcast('Serie A', '05.04 21:00', 'Juventus ' + '\nAS Roma')}
        {renderBroadcast(
          'NHL',
          '18.05 19:45',
          'Toronto Maple Leafs ' + '\nMontreal Canadiens',
        )}
        {renderBroadcast(
          'MLB',
          '28.06 18:45',
          'Boston Red Sox ' + '\nNew York Yankees',
        )}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.black,
    elevation: 5,
    paddingLeft: 20,
    borderRadius: 20,
  },
  league: {
    fontSize: 40,
    fontFamily: FONTS.black,
    color: COLORS.white,
    paddingVertical: 8,
    textAlign: 'center',
    width: '100%',
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.placeholder,
    marginLeft: 15,
    position: 'absolute',
    bottom: -20,
    right: 10,
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.white,
    marginTop: 5,
    marginLeft: 5,
  },
});
