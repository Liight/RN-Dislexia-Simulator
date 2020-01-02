import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      string1Original:
        'Friends who have dyslexia described to me how they experience reading. They can read, but it takes a lot of concentration, and the letters seems to "jump around".',
      string2Original:
        'Dyslexia is characterized by difficulty with learning to read fluently and with accurate comprehension despite normal intelligence.This includes difficulty with phonological awareness, phonological decoding, processing speed, orthographic coding, auditory short- term memory, language skills / verbal comprehension, and / or rapid naming.',
      string3Original:
        'Developmental reading disorder (DRD) is the most common learning disability. Dyslexia is the most recognized of reading disorders, however not all reading disorders are linked to dyslexia.',
      string4Original:
        'Some see dyslexia as distinct from reading difficulties resulting from other causes, such as a non-neurological deficiency with vision or hearing, or poor or inadequate reading instruction. There are three proposed cognitive subtypes of dyslexia (auditory, visual and attentional), although individual cases of dyslexia are better explained by specific underlying neuropsychological deficits and co- occurring learning disabilities(e.g.attention - deficit / hyperactivity disorder, math disability, etc.). Although it is considered to be a receptive language - based learning disability in the research literature, dyslexia also affects expressive language skills. Researchers at MIT found that people with dyslexia exhibited impaired voice-recognition abilities.',
      string1:
        'Friends who have dyslexia described to me how they experience reading. They can read, but it takes a lot of concentration, and the letters seems to "jump around".',
      string2:
        'Dyslexia is characterized by difficulty with learning to read fluently and with accurate comprehension despite normal intelligence.This includes difficulty with phonological awareness, phonological decoding, processing speed, orthographic coding, auditory short- term memory, language skills / verbal comprehension, and / or rapid naming.',
      string3:
        'Developmental reading disorder (DRD) is the most common learning disability. Dyslexia is the most recognized of reading disorders, however not all reading disorders are linked to dyslexia.',
      string4:
        'Some see dyslexia as distinct from reading difficulties resulting from other causes, such as a non-neurological deficiency with vision or hearing, or poor or inadequate reading instruction. There are three proposed cognitive subtypes of dyslexia (auditory, visual and attentional), although individual cases of dyslexia are better explained by specific underlying neuropsychological deficits and co- occurring learning disabilities(e.g.attention - deficit / hyperactivity disorder, math disability, etc.). Although it is considered to be a receptive language - based learning disability in the research literature, dyslexia also affects expressive language skills. Researchers at MIT found that people with dyslexia exhibited impaired voice-recognition abilities.',
      simulationOn: false,
    };
    this._handleStartDyslexia = this._handleStartDyslexia.bind(this);
  }

  _updateTestStatus = () => {
    this.setState((state, props) => ({
        simulationOn: !state.simulationOn,
      }),
      () => {
        this._handleStartDyslexia();
      },
    );
  };

  _handleStartDyslexia = () => {
    if (this.state.simulationOn) {
      // Initialize variables
      const stringCopy1 = this.state.string1;
      const stringCopy2 = this.state.string2;
      const stringCopy3 = this.state.string3;
      const stringCopy4 = this.state.string4;

      // Manipulation Starts
      const updatedString1 = returnUpdatedString(stringCopy1);
      const updatedString2 = returnUpdatedString(stringCopy2);
      const updatedString3 = returnUpdatedString(stringCopy3);
      const updatedString4 = returnUpdatedString(stringCopy4);

      function rearrangeWordLetters(word) {
        var len = word.length - 1;
        return len < 3
          ? word
          : word[0] +
              word
                .slice(1, len)
                .split('')
                .sort(function() {
                  return Math.random() - 0.5;
                })
                .join('') +
              word[len];
      }

      function returnUpdatedString(str) {
        var newString = '';
        var wordArr = str.split(' ');
        for (var i = 0; i < wordArr.length; i++) {
          newString += rearrangeWordLetters(wordArr[i]) + ' ';
        }
        return newString.trim();
      }

      // Manipulation Ends, Update State
      this.setState({
        string1: updatedString1,
        string2: updatedString2,
        string3: updatedString3,
        string4: updatedString4,
      });

      // Timed Recursive Call
      setTimeout(() => {
        this._handleStartDyslexia();
      }, 500);
    } else {
      // Reset Test
      this.setState((state, props) => ({
        string1: state.string1Original,
        string2: state.string2Original,
        string3: state.string3Original,
        string4: state.string4Original,
      }));
    }
  };

  render() {
    console.ignoredYellowBox = ['Warning:'];
    const myString1 = this.state.string1;
    const myString2 = this.state.string2;
    const myString3 = this.state.string3;
    const myString4 = this.state.string4;
    const myButton = (
      <Button
        style={styles.button}
        title={this.state.simulationOn ? 'Stop Simulation' : 'Start Simulation'}
        onPress={() => {
          this._updateTestStatus();
        }}
      />
    );

    // Suppress Warnings
    console.ignoredYellowBox = ['Warning:'];

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Dyslexia Simulator</Text>
        <Text style={styles.instructions}>Let's get Dyslexic!</Text>
        {myButton}
        <Text style={styles.dyslexicText}>{myString1}</Text>
        <Text style={styles.dyslexicText}>{myString2}</Text>
        <Text style={styles.dyslexicText}>{myString3}</Text>
        <Text style={styles.dyslexicText}>{myString4}</Text>
      </View>
    );
  }
}

// STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4e4e4',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'green',
    color: 'orange',
  },
  dyslexicText: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
});
