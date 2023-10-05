import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, KeyboardAvoidingView } from 'react-native';

const App = () => {
  const [inputCelsius, setInputCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState();

  const convertToCelsius = (value) => {
    return ((parseFloat(value) - 32) * 5) / 9;
  };

  const handleCelsiusChange = (text) => {
    setInputCelsius(text);
    if(text === ''){
      setFahrenheit('')
    }
    else{
    const fahrenheitValue = convertToCelsius(text);
    fahrenheitValue?setFahrenheit(fahrenheitValue.toFixed(2).toString()):setFahrenheit("0");
  }
    
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Text
        style={{
          fontWeight: '500',
          fontSize: 30,
          textAlign: 'center',
          marginTop: 20,
          lineHeight: 100,
          
          color: '#006400',
        }}>
        Celsius To Fahrenheit Converter
      </Text>

      <KeyboardAvoidingView style={{ flex: 1 }}>
        <View
          style={{
            marginBottom:100,
            flex: 1,
            padding: 20,
            alignItems: 'center',
            width: '100%',
            gap: 20,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection:"row",
              height: 150,
              width: 250,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              onChangeText={handleCelsiusChange}
              
              value={inputCelsius}
              style={{
                color:"darkgreen",
                borderColor:"orange",
                borderRadius:50,
                textAlign:"center",
                borderWidth: 2,
                height: '100%',
                width: '100%',
                fontSize: 50,
                paddingHorizontal: 20,
              }}
              placeholder="° Celsius"
              keyboardType="numeric"
            />
           
         
          </View>

          <View
            style={{
              flex: 1,
              height: 200,
              width: 250,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}>
            {(fahrenheit!=='')?<TextInput
              style={{
                borderColor:"orange",
                borderRadius: 50,
                textAlign: 'center',
                borderWidth: 1,
                height: '100%',
                width: '100%',
                fontSize: 50,
                paddingHorizontal: 20,
                position: 'absolute',
              
              }}
              placeholder=''
             
            />:<TextInput
            style={{
              color:"darkgreen",
              borderColor:"orange",
              borderRadius: 50,
              textAlign: 'center',
              borderWidth: 2,
              height: '100%',
              width: '100%',
              fontSize: 50,
              paddingHorizontal: 20,
              position: 'absolute',
            
            }}
            placeholder='Fahrenheit'
           
          />}
            <Text
              style={{
                color:"darkgreen",
                borderColor:"orange",
                borderRadius: 50,
                textAlignVertical: 'center',
                textAlign: 'center',
                borderWidth: 0.5,
                height: '100%',
                width: '100%',
                fontSize: 50,
                paddingHorizontal: 20,
                position: 'absolute',
                backgroundColor: 'transparent',
              }}>
              {fahrenheit} 
            </Text>
          </View>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default App;
