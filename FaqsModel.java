package com.verizon.value.aem.core.models;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import java.util.List;

@Model(adaptables = {SlingHttpServletRequest.class, Resource.class},
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class FaqsModel {

    @ValueMapValue
    private String title;

    @ChildResource
    private List<Question> faqsList;

    public String getTitle() {
        return title;
    }

    public List<Question> getFaqsList() {
        return faqsList;
    }

    public boolean isEmpty() {
        return faqsList == null && title==null;
    }

    @Model(adaptables = { Resource.class, SlingHttpServletRequest.class },
            defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
    public static class Question{
        @ValueMapValue
        private String question;

        public String getQuestion() {
            return question;
        }
    }
}
