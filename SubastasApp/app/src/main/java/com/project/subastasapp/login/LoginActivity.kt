package com.project.subastasapp.login

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.text.TextUtils
import android.view.View
import android.widget.EditText
import android.widget.ProgressBar
import android.widget.Toast
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.firestore.FirebaseFirestore
import com.project.subastasapp.MainActivity
import com.project.subastasapp.R
import kotlinx.android.synthetic.main.activity_login.*

class LoginActivity : AppCompatActivity() {

    private lateinit var txtEmail: EditText
    private lateinit var txtPassword: EditText

    private lateinit var progressBar: ProgressBar
    private lateinit var auth: FirebaseAuth

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)
        txtEmail = findViewById(R.id.txtemail)
        txtPassword = findViewById(R.id.txtPassword)
        progressBar = findViewById(R.id.pbLogin)
        progressBar = ProgressBar(this)
        auth = FirebaseAuth.getInstance()

    }

    fun login(view: View){
        val email: String = txtemail.text.toString()
        val password: String = txtPassword.text.toString()
        progressBar.visibility = View.VISIBLE

        if ( !TextUtils.isEmpty(email) && !TextUtils.isEmpty(password)){
            auth.signInWithEmailAndPassword(email,password)
                .addOnCompleteListener { task ->
                    if (task.isSuccessful){
                        startActivity(Intent(this, MainActivity::class.java))
                    } else {
                        Toast.makeText(this, "Usuario o contraseña incorrecta", Toast.LENGTH_LONG).show()
                    }
                }
        }
    }

    fun register(view:View) {
        startActivity(Intent(this, RegisterActivity::class.java))
    }

    fun forgotPassword(view:View) {
        startActivity(Intent(this, ForgotPasswordActivity::class.java))
    }

    override fun onResume() {
        super.onResume()

        progressBar.visibility = View.INVISIBLE
        txtEmail.setText("")
        txtPassword.setText("")
    }

}
