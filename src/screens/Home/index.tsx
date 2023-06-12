import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'
import { useState } from 'react'

export default function Home() {

    const [participants, setParticipants] = useState<string[]>([])
    const [participantName, setParticipantName] = useState<string>('')

    

    function handleParticipantAdd() {
        if(participants.includes(participantName)) {
            return Alert.alert('Participante existe', 'Já existe um participante na lista com esse nome!')
        }

        setParticipants(prevState => [...prevState, participantName])
        setParticipantName('')
    }

    function handleParticipantRemove(name: string) {
        Alert.alert("Remover", `Remover o participante ${name}`, [
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    return (
        <View style={styles.container}> 
            <Text style={styles.eventName}>Nome do Evento</Text>
            <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

            <View style={styles.form}>
                <TextInput 
                    placeholder='Nome do participante' 
                    placeholderTextColor='#6b6b6b' 
                    style={styles.input}
                    value={participantName}
                    onChangeText={setParticipantName}
                />
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <FlatList 
                data={participants} 
                showsVerticalScrollIndicator={false} 
                renderItem={({item}) => (
                    <Participant 
                        key={item} 
                        name={item} 
                        onRemove={() => handleParticipantRemove(item)}
                    />
                )}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmpty}>Ninguém chegou no evento ainda? Adicione participantes na sua lista de presença!</Text>
                )}
            />
        </View>
    )
}