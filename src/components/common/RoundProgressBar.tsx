import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, PanResponder} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {colors, fontFamily, fontSize} from '../../helper/utils';

const MAX_POINTS = 10000;

const RoundProgressBar = ({points}: any) => {
  const [isMoving, setIsMoving] = useState(false);
  const [pointsDelta, setPointsDelta] = useState(0);

  const circularProgressRef = useRef();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onStartShouldSetPanResponderCapture: () => true,
    onMoveShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponderCapture: () => true,

    onPanResponderGrant: () => {
      setIsMoving(true);
      setPointsDelta(0);
    },

    onPanResponderTerminationRequest: () => true,
  });
  const pointss = parseInt(points?.replace(/\D/g, ''), 10);
  const fill = (pointss / MAX_POINTS) * 100;

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <AnimatedCircularProgress
        size={150}
        duration={2000}
        width={13}
        rotation={-90 + 90}
        backgroundWidth={20}
        fillLineCap="round"
        fill={fill}
        tintColor="#87D0C8"
        backgroundColor="rgba(213,225,224,1)"
        ref={circularProgressRef}>
        {fill => <Text style={styles.points}>{'$' + Math.round(pointss)}</Text>}
      </AnimatedCircularProgress>
    </View>
  );
};

const styles = StyleSheet.create({
  points: {
    textAlign: 'center',
    color: colors.darkBlue,
    fontSize: fontSize(22),
    fontFamily: fontFamily.bold,
  },
  container: {
    alignItems: 'center',
  },
  pointsDelta: {
    color: '#4c6479',
    fontSize: 50,
    fontWeight: '100',
  },
  pointsDeltaActive: {
    color: '#fff',
  },
});

export default RoundProgressBar;
