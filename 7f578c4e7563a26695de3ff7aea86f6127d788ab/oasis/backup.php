<?php 
                        $action=$_REQUEST['action']; 
                        if ($action=="") /* display the contact form */ 
                            { 
                            ?> 
                            <form autocomplete="on" action="" method="POST" enctype="multipart/form-data">

                                <input type="hidden" name="action" value="submit">
                                <label><strong>Your name</strong></label>
                                <input id="name" name="name" type="text" class="" value="" tabindex="1" title="Please enter your name.">
                                <label><strong>Your email address</strong></label>
                                <input id="email" name="email" type="email" spellcheck="false" value="" tabindex="2" title="Please enter your email address.">
                                <label><strong>Your telephone number</strong></label>
                                <input id="telephone" name="telephone" type="text" spellcheck="false" value="" tabindex="3" title="Please enter your telephone number.">
                                <label><strong>Your question</strong></label>
                                <textarea id="message" name="message" spellcheck="true" tabindex="4" title="Please enter your question or personal message."></textarea>
                                <input id="submit" name="submit" type="submit" value="Send us your enquiry.">    
                            </form> 
                    <?php 
                        }  
                    else /* send the submitted data */ 
                        { 
                        $name=$_REQUEST['name'];
                        $email=$_REQUEST['email']; 
                        $telephone=$_REQUEST['telephone']; 
                        $message=$_REQUEST['message']; 
                        if (($name=="")||($email=="")||($telephone=="")||($message=="")) 
                            { 
                            echo "All fields are required, please complete <a href=\"\">the form</a> and resubmit."; 
                            } 
                        else{         
                            $from="From: $name<$email>\r\nReturn-path: $email"; 
                            $subject="Enquiry from the Oasis website"; 
                            mail("julian@muneo.co.uk", $subject, $message, $from); 
                            echo "<p><strong>Your enquiry has been sent.</strong><br/><br/>One of the team will be in touch soon.</p>"; 
                            } 
                        }   
                    ?>