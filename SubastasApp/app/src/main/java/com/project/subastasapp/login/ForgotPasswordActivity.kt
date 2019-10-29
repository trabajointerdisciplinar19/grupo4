package com.project.subastasapp.login

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import com.google.firebase.auth.FirebaseAuth
import com.project.subastasapp.R

class ForgotPasswordActivity : AppCompatActivity() {

    private lateinit var txtEmail: EditText
    private lateinit var auth: FirebaseAuth

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_forgot_password)

        auth = FirebaseAuth.getInstance()
        txtEmail = findViewById(R.id.txtEmailReset)
    }

    fun resetPassword(ciew:View) {
        var email = txtEmail.text.toString()
        auth.sendPasswordResetEmail(email)
            .addOnCompleteListener { task ->
                if (task.isSuccessful) {
                    Toast.makeText(this,"Se envio un correo, verifique su bandeja", Toast.LENGTH_LONG).show()
                }
            }
    }

    fun cancel(view:View){
        finish()
    }
}
