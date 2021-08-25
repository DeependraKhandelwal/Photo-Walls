package com.ops.in.config;
import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any())
                .build()
                .apiInfo(metaInfo());
    }
    private ApiInfo metaInfo() {

        ApiInfo apiInfo = new ApiInfo("Online Photo Shopping",
                "The Online Shopping System is the application that allows the users to shop online without going to the shops to buy them. Sometimes you need a good-quality stock image as the base for a product photography or banner image. These websites feature some of the best stock photography for eCommerce entrepreneurs.",
                "1.0",
                "TERMS OF SERVICE URL",
                new Contact("Deependra","http://localhost:8082/swagger-ui.html#/","jitu1227@gmail.com"),
                "Spring Boot",
                "https://spring.io/projects/spring-boot",
                Collections.emptyList()
        );

        return apiInfo;
    }
}