import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ImageSourcePropType } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { IconProps } from '@expo/vector-icons/build/createIconSet';
import { useRouter } from 'expo-router';

// Define the props for the MenuButton component
type MenuButtonProps = {
  icon?: React.ComponentType<IconProps<any>>; // For vector icons
  iconName?: string; // Name of the icon
  label: string; // Button label
  image?: ImageSourcePropType; // For custom image icons
  onPress?: () => void; // Add this line
};

const MenuButton: React.FC<MenuButtonProps> = ({ icon: Icon, iconName, label, image, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    {Icon && <Icon name={iconName || ''} size={24} color="black" style={styles.icon} />}
    {image && <Image source={image} style={styles.customIcon} />}
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

export default function Index() {
  
  const router=useRouter()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Image
          style={styles.headerImage}
          source={require('../assets/images/obeid-new.png')}
        />

        <MenuButton icon={FontAwesome6} iconName="stethoscope" label="Doctors"  onPress={() => router.push('/doctors')}/>
        <MenuButton icon={Entypo} iconName="location" label="Our Location" />
        <MenuButton icon={Entypo} iconName="megaphone" label="Announcement" />
        <MenuButton icon={MaterialIcons} iconName="record-voice-over" label="Your Voice Matters" />
        <MenuButton icon={Entypo} iconName="share" label="Share With Friends" />
        <MenuButton image={require('../assets/images/obeid-icon-new.png')} label="About Us" />

        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonSmall}>
            <FontAwesome6 name="language" size={20} color="black" style={styles.icon} />
            <Text style={styles.buttonText}>English</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSmall} onPress={()=>router.push("/login")}>
            <FontAwesome6 name="power-off" size={20} color="black" style={styles.icon} />
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.socials}>
          <SimpleLineIcons name="globe" size={24} color="black" />
          <FontAwesome6 name="twitter" size={24} color="black" />
          <FontAwesome6 name="youtube" size={24} color="black" />
          <FontAwesome6 name="facebook-f" size={24} color="black" />
        </View>

        <View style={styles.links}>
          <Text style={styles.linkText}>Terms of Service</Text>
          <Text style={styles.linkText}>Privacy Policy</Text>
        </View>

        <Image source={require('../assets/images/smart.png')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inner: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  headerImage: {
    width: '90%',
    height: 92,
    marginBottom: 40,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    borderRadius: 20,
    padding: 15,
    width: '70%',
    marginBottom: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
  icon: {
    paddingRight: 10,
  },
  customIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    resizeMode: 'contain',
  },
  buttonSmall: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#B5B1B1',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    width: '40%',
    justifyContent: 'center',
    elevation: 8,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
    width: '80%',
  },
  socials: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 140,
    marginVertical: 15,
  },
  links: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 220,
    marginBottom: 20,
  },
  linkText: {
    color: '#444',
  },
});