package com.project.subastasapp.login

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.text.TextUtils
import android.util.Log
import android.view.View
import android.widget.EditText
import android.widget.ProgressBar
import android.widget.Toast
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.FirebaseUser
import com.google.firebase.auth.UserProfileChangeRequest
import com.google.firebase.database.DatabaseReference
import com.google.firebase.database.FirebaseDatabase
import com.google.firebase.firestore.CollectionReference
import com.google.firebase.firestore.FirebaseFirestore
import com.project.subastasapp.Entidades.User
import com.project.subastasapp.MainActivity
import com.project.subastasapp.R
import kotlinx.android.synthetic.main.activity_login.*
import java.lang.ref.PhantomReference

class RegisterActivity : AppCompatActivity() {

    private lateinit var txtName: EditText
    private lateinit var txtLastName: EditText
    private lateinit var txtEmail: EditText
    private lateinit var txtPassword: EditText
    private lateinit var progressBar: ProgressBar
    private lateinit var db: FirebaseFirestore
    private lateinit var userReference: CollectionReference
    private lateinit var auth: FirebaseAuth

    //REAL TIME
    //private lateinit var database: FirebaseDatabase
    //private lateinit var dbReference: DatabaseReference

    //database = FirebaseDatabase.getInstance()
    //dbReference = database.reference.child("user")

    //val userDB = dbReference.child(user?.uid.toString())
    //userDB.child("name").setValue(name)
    //userDB.child("lastName").setValue(lastName)

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_register)
        txtName = findViewById(R.id.txtName)
        txtLastName = findViewById(R.id.txtLastName)
        txtEmail = findViewById(R.id.txtemail)
        txtPassword = findViewById(R.id.txtPassword)
        progressBar = findViewById(R.id.pbRegister)
        progressBar = ProgressBar(this)
        db = FirebaseFirestore.getInstance()
        auth = FirebaseAuth.getInstance()
        userReference = db.collection("user")


    }

    fun register(view:View){
        createNewAccount()
    }

    private fun createNewAccount(){
        val name: String = txtName.text.toString()
        val lastName: String = txtLastName.text.toString()
        val email: String = txtemail.text.toString()
        val password: String = txtPassword.text.toString()

        progressBar.visibility = View.VISIBLE

        if (!TextUtils.isEmpty(name) &&
            !TextUtils.isEmpty(lastName) &&
            !TextUtils.isEmpty(email) &&
            !TextUtils.isEmpty(password) ) {

            auth.createUserWithEmailAndPassword(email, password)
                .addOnCompleteListener(this){
                    task ->
                    if(task.isSuccessful){
                        val user: FirebaseUser? = auth.currentUser
                        var nameFull = name + ' ' + lastName
                        if (user != null) {
                            val profileUpdate = UserProfileChangeRequest.Builder()
                                .setDisplayName(nameFull)
                                .build()

                            user.updateProfile(profileUpdate)?.addOnCompleteListener { task ->
                                if (task.isSuccessful){
                                    Log.d("Firebase: Update User", "Perfil actualizado")
                                }
                            }

                            verifyEmail(user)
                            val newUser = User(user?.uid.toString(), name, lastName)
                            userReference.document(email).set(newUser)
                            startActivity(Intent(this, MainActivity::class.java))
                        }

                    } else {
                        Log.w( "User Register" , "createUserWithEmail:failure", task.exception)
                        Toast.makeText(this, "Error al registrar correo", Toast.LENGTH_LONG).show()
                    }
                }
        }

    }

    private fun verifyEmail(user:FirebaseUser?){
        if (user != null){
            user?.sendEmailVerification()
                .addOnCompleteListener(this) {
                        task ->
                    if(task.isComplete){
                        Toast.makeText(this, "Email enviado", Toast.LENGTH_LONG).show()
                    } else {
                        Toast.makeText(this, "Error al enviar correo de verificación", Toast.LENGTH_LONG).show()
                    }
                }
        }

    }
}
