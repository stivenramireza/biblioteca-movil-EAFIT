import React, { Component } from 'react';
import {Dimensions,
	StyleSheet,
	View,
	Text,
	Button,
	Image,
	ScrollView,
    TouchableHighlight,
    Picker,
	TextInput,
    CheckBox,
} from 'react-native';

import { Form,
    Separator,InputField, LinkField,
    SwitchField, PickerField,DatePickerField,TimePickerField
   } from 'react-native-form-generator';

import { AppLoading, Asset, Font } from 'expo';
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

var color = 'white';
class Basica extends Component {
    static navigationOptions = {
        drawerLabel: ({color = "white"}) => ('Básica'),
        drawerIcon: ({ tintColor }) => (
            <FontAwesome
                    name = "search"
                    color = "white"
                    size = {24}
            />
        )
      };
    render() {
        return (
            <View style = {styles.fondo}>
                
                <View style = {styles.textWithIcon}>
				    <Text style = {styles.textTitle}>Búsqueda básica</Text>
		        </View>
                <View>
                    <Text style = {styles.text}>Búsqueda por:</Text>
                </View>
                <View>
                    <PickerField style = {styles.picker} ref='busquedapor'
                        options={{
                        todos: 'Todos',
                        autor: 'Autor',
                        isbn: 'ISBN / ISSN',
                        editorial: 'Editorial',
                        tema_materia: 'Tema / Materias',
                        titulo: 'Título',
                        titulo_revista: 'Títulos de Revistas',
                        serie: 'Serie'
                    }}/>
                </View>
                <View style = {styles.textWithIcon}>
                    <TextInput
                        style={{height: 70, width: 360}}
                        placeholder="Ingrese el texto que desea buscar"
                        onChangeText={(text) => this.setState({text})}
                    />
                </View>

                <View>
                    <Text style = {styles.text}>Limitar material a:</Text>
                </View>
                <View>
                    <SwitchField label=' Sólo material de texto completo'/>
                </View>
                <View style = {styles.textWithIcon}>
				<Text style = {styles.text}>Sólo material de texto completo</Text>
		        </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'white'  	
    },
    text: {
		color: '#000066',
		fontSize: 20,
    },
    textTitle: {
        color: '#000066',
		fontSize: 20,
        fontWeight: 'bold'
    },
	textWithIcon: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 20,
		borderColor: '#000066',
		borderBottomWidth: 3
    },
    textMenu: {
        color: '#000066',
		fontSize: 24
    },
    picker: {
        backgroundColor: 'E0E0E0'
    }
})

export default Basica;