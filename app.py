import streamlit as st

st.title("Mahi's Web App 🚀")
st.header("Hello, my name is Mahi")
st.subheader("Hello, I'm a 12-year-old frontend engineer!")

name = st.text_input("What is your name?")
if st.button("Enter"):
    st.success("Hello " + name)
    
rate = st.slider("How much do you like coding? (1-10)", 1, 10, 5)
st.write("You like coding " + str(rate) + " out of 10?")
if st.button("yes!"):
    st.success("amazing")
elif st.button("no"):
        st.success("why?")