import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/styles";

const TeamScore = ({ teamName, score, onIncrease, onDecrease }) => {
  return (
    <View style={styles.teamContainer}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.teamScore}>{score}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.increaseButton]} onPress={onIncrease}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.decreaseButton]} onPress={onDecrease}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TeamScore;
