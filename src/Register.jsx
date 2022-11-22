import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  InteractionManager,
  PermissionsAndroid,
  ScrollView
} from "react-native";
import React, { useState } from "react";

import Icon1 from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/FontAwesome";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Dropdown from "./component/Dropdown";

let data = [
  { id: 1, name: "Haircut" },
  { id: 2, name: "spa" },
  { id: 3, name: "massage" },
  { id: 4, name: "Beard-trim" }
];

let data1 = [
  { id: 1, name: "male" },
  { id: 2, name: "female" }
];

let data2 = [
  { id: 1, name: "199" },
  { id: 2, name: "399" },
  { id: 3, name: "999" }
];

let data3 = [
  { id: 1, name: "India" },
  { id: 2, name: "pakistan" },
  { id: 3, name: "srilanka" }
];

let data4 = [
  { id: 1, name: "Delhi" },
  { id: 2, name: "Punjab" },
  { id: 3, name: "haryana" }
];

let data5 = [
  { id: 1, name: "Delhi" },
  { id: 2, name: "chandigarh" },
  { id: 3, name: "Noida" }
];

let data6 = [
  { id: 1, name: "1" },
  { id: 2, name: "2" },
  { id: 3, name: "3" },
  { id: 4, name: "4" },
  { id: 5, name: "5" }
];



const register = () => {
  const [next, setNext] = useState(false);

  const [selecteditem, setSelecteditem] = useState(null);
  const [selecteditem1, setSelecteditem1] = useState(null);
  const [selecteditem2, setSelecteditem2] = useState(null);
  const [selecteditem3, setSelecteditem3] = useState(null);
  const [selecteditem4, setSelecteditem4] = useState(null);
  const [selecteditem5, setSelecteditem5] = useState(null);

  const [initial, setInitial] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile_no, setMobile_no] = useState();
  const [password, setPassword] = useState();
  const [confirm_password, setConfirm_password] = useState();
  const [gender, setGender] = useState();
  const [company_name, setCompany_name] = useState("");
  const [reference_name, setReference_name] = useState("");
  const [reference_mobile_no, setReference_mobile_no] = useState();
  const [reference_relation, setReference_relation] = useState("");
  const [alternate_mobile_no, setAlternate_mobile_no] = useState();
  const [service_category, setService_category] = useState();
  const [service_price, setService_price] = useState();
  const [experience, setExperience] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pin_code, setPin_code] = useState("");
 
  const [term_condition, setTerm_condition] = useState(null);
  const [image , setImage] = useState();

  const onSelect = (e) => {
    setSelecteditem(e.name);
    setService_category(e.id);
    
  };

  const onSelect2 = (e) => {
    setSelecteditem1(e.name);
    setService_price(e.id);
  };

  const onSelect3 = (e) => {
    setSelecteditem2(e.name);
    setCountry(e.id);
  };

  const onSelect4 = (e) => {
    setSelecteditem3(e.name);
    setState(e.id);
  };

  const onSelect5 = (e) => {
    setSelecteditem4(e.name);
    setCity(e.id);
  };

  const onSelect6 = (e) => {
    setSelecteditem5(e.name);
    setExperience(e.id);
  };

  const func1 =() =>{
    setInitial(!initial);
    if(initial ==true){
      setTerm_condition(1);
    }
    {
      setTerm_condition(0);
    }
  };

let options = {
  saveToPhotos:true,
  mediaType:'photo',
};
const openGallery = async ()=>{
  const result = await launchImageLibrary(options);
  setImage(result.assets[0].uri)
};
  
const submit =() =>{
  
 fetch('http://182.76.237.238/~wellness/wellness/api/provider_registration',{
      method:"post",
      headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        name,
        email,
        mobile_no,
        company_name,
        password,
        confirm_password,
        gender,
        image,
        reference_name,
        reference_mobile_no,
        reference_relation,
        alternate_mobile_no,
        service_category,
        experience,
        country,
        state,
        pin_code,
        city,
        term_condition,
        service_price,
        
      })
     })
     .then(res =>res.json())
     .then(data => {
      console.log(data)
     })
};
  return (
    <ScrollView>
      <View style={{ backgroundColor: "#fce3d7" }}>
      <TouchableOpacity onPress={() => setNext(!next)}>
          <View style={{ marginTop: 20, marginLeft: 8 }}>
            <Icon1 name="left" size={30} color="black" />
          </View>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 30,
            fontWeight: "500",
            color: "black",
            paddingTop: 10,
            alignSelf: "center"
          }}
        >
          Registration
        </Text>

        <Text
          style={{
            fontSize: 15,
            fontWeight: "400",
            color: "black",
            paddingTop: 10,
            alignSelf: "center"
          }}
        >
          Please enter your details to sign up
        </Text>

        <View style={next ? styles.none : styles.block}>
          <View>
          <TouchableOpacity onPress={openGallery}>
         <View style={styles.imageback}>
          <Icon1 name="adduser" size={100} color="grey" style={styles.logo}/>
          <Image source={{uri:image}} style={styles.imageu}/>
          </View> 
             </TouchableOpacity>
           
            <Text
              style={{
                fontSize: 15,
                fontWeight: "400",
                color: "black",
                paddingTop: 10,
                alignSelf: "center"
              }}
            >
              Upload profile picture
            </Text>
          </View>

          <Text style={styles.text}>Name</Text>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={(value) => setName(value)}
            style={styles.input}
          />

          <Text style={styles.text}>Email</Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(value) => setEmail(value)}
            style={styles.input}
            keyboardType='email-address'
          />
          <Text style={styles.text}>Mobile No.</Text>
          <TextInput
            placeholder="Mobile no"
            value={mobile_no}
            onChangeText={(value) => setMobile_no(value)}
            style={styles.input}
            keyboardType="number-pad"
          />

          <Text style={styles.text}>Gender</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            {data1.map((gend) => (
              <View key={gend.id}>
                <View style={styles.backgen}>
                  <TouchableOpacity
                    style={styles.outter}
                    onPress={() => setGender(gend.id)}
                  >
                    {gender === gend.id && <View style={styles.inner} />}
                  </TouchableOpacity>
                  <Text style={styles.textgend}>{gend.name}</Text>
                </View>
              </View>
            ))}
          </View>

          <Text style={styles.text}>Password</Text>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry={true}
            style={styles.input}
          />

          <Text style={styles.text}>Confirm Password</Text>
          <TextInput
            placeholder="Confirm password"
            value={confirm_password}
            onChangeText={(value) => setConfirm_password(value)}
            secureTextEntry={true}
            style={styles.input}
            
          />

          <Text style={styles.text}>
            Provide a Reference for Verification Purposes
          </Text>
          <TextInput
            placeholder="Reference name"
            value={reference_name}
            onChangeText={(value) => setReference_name(value)}
            style={styles.input}
          />

          <Text style={styles.text}>Mobile Number</Text>
          <TextInput
            placeholder="Reference mobile no"
            value={reference_mobile_no}
            onChangeText={(value) => setReference_mobile_no(value)}
            style={styles.input}
            keyboardType="number-pad"
          />

          <Text style={styles.text}>Relation to Reference</Text>
          <TextInput
            placeholder="Relation to Reference"
            value={reference_relation}
            onChangeText={(value) => setReference_relation(value)}
            style={styles.input}
          />

          <TouchableOpacity onPress={() => setNext(!next)}>
            <View style={styles.nextbut}>
              <Text
                style={{
                  color: "white",
                  marginTop: 10,
                  fontWeight: "bold",
                  fontSize: 15
                }}
              >
                Next
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* second page coding start here  */}

        <View style={next ? styles.block : styles.none}>
          <Text style={styles.text}>Company name</Text>
          <TextInput
            placeholder="Company name"
            value={company_name}
            onChangeText={(value) => setCompany_name(value)}
            style={styles.input}
          />

          <Text style={styles.text}>Alternate Contact number</Text>
          <TextInput
            placeholder="Alternate mobile no"
            value={alternate_mobile_no}
            onChangeText={(value) => setAlternate_mobile_no(value)}
            style={styles.input}
            keyboardType="number-pad"
          />

          <Text style={styles.text}>Types of Service/s</Text>
          <Dropdown daata={data} value={selecteditem} onSelect={onSelect} />

          <Text style={styles.text}>Price list of Services</Text>
          <Dropdown daata={data2} value={selecteditem1} onSelect={onSelect2} />

          <Text style={styles.text}>Experience</Text>
          <Dropdown daata={data6} value={selecteditem5} onSelect={onSelect6} />

          <Text style={styles.text}>Country</Text>
          <Dropdown daata={data3} value={selecteditem2} onSelect={onSelect3} />

          <Text style={styles.text}>State</Text>
          <Dropdown daata={data4} value={selecteditem3} onSelect={onSelect4} />

          <Text style={styles.text}>City</Text>
          <Dropdown daata={data5} value={selecteditem4} onSelect={onSelect5} />

         

         
          <Text style={styles.text}>Area Code</Text>
          <TextInput
            placeholder="Enter pincode"
            value={pin_code}
            onChangeText={(value) => setPin_code(value)}
            style={styles.input}
            keyboardType="number-pad"
          />

          <View style={{flexDirection:'row',alignSelf:'center'}}>
          <TouchableOpacity onPress={func1}>
          <View style={{width:20,height:20,backgroundColor:'white',alignSelf:'center'}}>
          {initial == true && <View style={{ 
              width: 18,
              height: 18,
              borderRadius:30,
              backgroundColor: "red",}} /> }
            
            </View>
            </TouchableOpacity> 
            
            
            <Text style={{fontSize:13,color:'black'}}> Accept Terms & Condition of App</Text>
          </View>

          <TouchableOpacity onPress={submit}>
            <View style={styles.nextbut}>
              <Text
                style={{
                  color: "white",
                  marginTop: 10,
                  fontWeight: "bold",
                  fontSize: 15
                }}
              >
                Registeration
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{ flexDirection: "row", margin: 10, justifyContent: "center" }}
        >
          <Text style={{ color: "black" }}>Already have an account ? </Text>
          <Text
            style={{
              color: "red",
              fontSize: 20,
              marginTop: -6,
              fontWeight: "bold"
            }}
          >
            Log In
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default register;

const styles = StyleSheet.create({
  option: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: -10,
    backgroundColor: "white",
    borderRadius: 2
  },
  Dropdowni: {
    height: 45,
    margin: 12,
    borderWidth: 1,
    padding: 13,
    borderRadius: 7,
    backgroundColor: "white",
    marginHorizontal: 30,
    flexDirection: "row"
  },
  none: {
    display: "none"
  },
  block: {},

  nextbut: {
    backgroundColor: "#5e5e5e",
    width: 300,
    height: 45,
    margin: 30,
    borderRadius: 30,
    alignItems: "center",
    alignSelf: "center"
  },
  textgend: {
    color: "white",
    fontWeight: "bold",
    paddingLeft: 15,
    fontSize: 15
  },
  backgen: {
    height: 45,
    width: 150,
    backgroundColor: "#5e5e5e",
    marginTop: 12,
    borderRadius: 30,
    alignItems: "center",
    flexDirection: "row",
    padding: 10
  },
  input: {
    height: 45,
    margin: 12,
    borderWidth: 1,
    padding: 13,
    borderRadius: 7,
    backgroundColor: "white",
    marginHorizontal: 30,
    color:'black'
  },
  text: {
    fontSize: 15,
    fontWeight: "400",
    color: "black",
    marginLeft: 40,
    marginTop: 14
  },
  outter: {
    width: 17,
    height: 17,
    borderRadius: 15,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inner: {
    width: 10,
    height: 10,
    backgroundColor: "red",
    borderRadius: 10
  },
  imageback: {
    width: 120,
    height: 120,
    backgroundColor: "#d3d6db",
    borderRadius: 80,
    borderWidth: 4,
    marginVertical: 10,
    alignSelf: "center"
  },
  logo:{
    alignSelf:'center',

  },
  imageu:{
    width: 120,
    height: 120,
    borderRadius: 80,
    marginTop:-105,
  }
});