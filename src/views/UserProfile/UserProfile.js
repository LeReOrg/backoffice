import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import ImageUploading from "react-images-uploading";

import avatar from "assets/img/faces/marc.jpg";
import { useTypeProduct } from "hooks/useTypeProduct";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const [thumbnail, setThumbnail] = useState(null);
  const [name, setName] = useState("");

  const { mutate, isLoading, isSuccess } = useTypeProduct();
  console.log(thumbnail);
  const onChange = (imageList, addUpdateIndex) => {
    setThumbnail(imageList[0].data_url);
  };
  const createTypeProduct = (e) => {
    e.preventDefault();
    const params = {
      name,
      thumbnail,
    };
    mutate(params);
  };
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Create TypeProduct</h4>
            </CardHeader>
            <input
              type="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <ImageUploading
                    value={thumbnail}
                    onChange={onChange}
                    dataURLKey="data_url"
                  >
                    {({
                      onImageUpload,
                      onImageRemoveAll,
                      onImageRemove,
                      isDragging,
                      dragProps,
                    }) => (
                      <div className={classes.upload__image_wrapper}>
                        <div className={classes.upload__image_eachItem}>
                          <button
                            style={isDragging ? { color: "red" } : null}
                            onClick={onImageUpload}
                            className={classes.upload__image_button}
                            {...dragProps}
                          >
                            <div
                              className={classes.upload__imageIcon_wrapper}
                            ></div>
                            <p className={classes.upload__imageIconText}>
                              Tải ảnh lên
                            </p>
                          </button>
                        </div>
                      </div>
                    )}
                  </ImageUploading>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="First Name"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Last Name"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Country"
                    id="country"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Postal Code"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={(e) => createTypeProduct(e)}>
                Create TypeProduct
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
